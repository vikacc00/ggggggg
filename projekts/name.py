vards = input('Ievadi vārdu: ')
klikski= input('Ievadi kliķšķu skaitu: ')
laiks = input('Ievadi laiku: ')
with open('name.txt', 'a', encoding='utf-8') as f:
    f.write(f"{vards}: {klikski}, {laiks +'\n'}") 