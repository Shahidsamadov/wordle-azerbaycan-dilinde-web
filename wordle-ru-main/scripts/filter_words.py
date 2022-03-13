import pandas as pd


def main():
    df = pd.read_csv('assets/words_5_letters_commonality.csv', index_col=0)

    easy_words = df[df['commonality'] > 0]['word'].values.tolist()
    hard_words = df[df['commonality'] == 0]['word'].values.tolist()

    with open('assets/words_5_letters_easy.txt', 'w') as f:
        f.writelines([w + '\n' for w in easy_words])

    with open('assets/words_5_letters_hard.txt', 'w') as f:
        f.writelines([w + '\n' for w in hard_words])


if __name__ == '__main__':
    main()
