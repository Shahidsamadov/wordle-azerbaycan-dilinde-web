from pathlib import Path
import sys


def main(file_path, n):
    file_path = Path(file_path)

    with open(file_path, 'r') as f:
        words = f.readlines()

    words = [w for w in words if len(w.strip()) == int(n)]

    new_file_name = f'words_{n}_letters.txt'
    with open(file_path.parent / new_file_name, 'w') as f:
        f.writelines(words)

    exit(0)


if __name__ == '__main__':
    try:
        main(sys.argv[1], sys.argv[2])
    except IndexError:
        print(f'2 parameters are required: filepath and number of letters')


