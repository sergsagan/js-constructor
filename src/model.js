import image from './assets/image.png';
import {TitleBlock, ImageBlock, TextBlock, TextColumnsBlock} from './classes/blocks';

export const model = [
    new TitleBlock('Конструктор сайтов на чистом Javascript', {
         tag: 'h1',
         styles: 'background: linear-gradient(to right, #ff0099, #493240);color: #fff;padding: 1.5rem;text-align: center;'
     }),
    new ImageBlock(image, {
         styles: 'display: flex; justify-content: center; padding: 2rem 0;',
         alt: 'my image',
         imageStyles: 'width: 500px; height: auto'
    }),
    new TextColumnsBlock( [
        'Приложение на чистом Javascript, без использования библиотек',
        'Узнаешь как работают принцыпы SOLID и ООП в Javascript',
        'Javascript - это просто, интерессно. Научись создавать любые UI самостоятельно'
    ],{styles: 'padding: 2rem 0; color: #fff;background: linear-gradient(to bottom, #8e2de2, #4a00e0);font-weight: bold;'}),
    new TextBlock('Крутые видео и уроки по JavaScript. Тут ты найдешь исчерпывающую информацию по любым аспектам языка, любым фреймворкам, такие как: React, Vue, Angular, Node, Svelte, Express, Next, Nuxt и многое другое. Присоединяйся!', {
        styles: 'background: linear-gradient(to left, #f2994a, #f2c94c);font-weight: bold;padding: 1rem;'
    })
]