import sys
import pandas as pd
import re
from tqdm import tqdm


def main(word_list_file, corpus_file_csv):
    with open(word_list_file, 'r') as f:
        words = f.readlines()

    corpus_df = pd.read_csv(corpus_file_csv)
    corpus = ' '.join(corpus_df['text'].values.tolist()).lower()

    def _word_commonalty(w):
        regex = re.compile(f'({w}[ .,])')
        return len(regex.findall(corpus))

    commonality = []
    for w in tqdm(words):
        commonality.append(_word_commonalty(w.strip()))

    df = pd.DataFrame({'word': [w.strip() for w in words], 'commonality': commonality})
    df.to_csv('assets/words_5_letters_commonality.csv')
    print(df.head())


if __name__ == '__main__':
    try:
        params = sys.argv[1], sys.argv[2]
    except IndexError:
        raise Exception('2 parameters are required: filepath and number of letters')

    main(*params)
