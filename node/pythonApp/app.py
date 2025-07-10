from flask import Flask, request, jsonify
from flask_cors import CORS
import word_difficulty
import nltk
import string
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize

app = Flask(__name__)
CORS(app)


@app.route('/analyze-text', methods=['POST'])
def analyze_text():
    data = request.get_json()
    text = data.get('text', '')
    clean_text_obj = word_difficulty.CleanText(text)
    word_difficulty_obj = word_difficulty.WordDifficulty()
    clean_text = clean_text_obj.getBookText(text) # get just the book text (there is some gutenberg unncessary items)
    all_clean = clean_text_obj.removeHTMLTags(clean_text) #remove html

    # tokenize and filter
    tokens = word_tokenize(all_clean)
    tokens = [w.lower() for w in tokens]
    stop_words = set(stopwords.words('english'))
    filtered_tokens = [
        w for w in tokens
        if w.isalpha() and w not in stop_words
    ]
    # get unique tokens
    seen = set()
    unique_tokens = []
    for word in filtered_tokens:
        if word not in seen:
            unique_tokens.append(word)
            seen.add(word)

    # removes names, places, etc, only keeps words
    words_and_values = {}
    for token in unique_tokens: 
        if (word_difficulty_obj.is_a_word(token) is True):
            words_and_values[token] = word_difficulty_obj.evaluate_word_difficulty(token)

    sorted_dict = dict(sorted(words_and_values.items(), key=lambda item: item[1]))

    analysis = {
        'top_100_hardest': list(sorted_dict.items())[:100]
    }
    return jsonify(analysis)

if __name__ == '__main__':
    app.run(debug=True)
