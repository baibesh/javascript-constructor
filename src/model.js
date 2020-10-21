import image from './assets/1.jpg'
import { TitleBlock, ImageBlock, ColumnsBlock, TextBlock } from './classes/blocks'

const text = `Lorem ipsum dolor sit amet, <a href="https://google.com">Click to Google</a> consectetur adipisicing elit. Ab alias aperiam assumenda, at autem beatae dolor ea enim error id illo, labore magnam pariatur quia reiciendis rem vitae. Ad, alias atque dignissimos ea illum iusto laudantium obcaecati quam sunt unde!`

export const model = [
    new TitleBlock('Конструктор сайтов на чистом JavaScript', {
        tag: 'h3',
        styles: {
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: '#fff',
            'text-align': 'center',
            padding: '1.5rem'
        }
    }),
    new ImageBlock(image, {
        styles: {
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center'
        },
        imageStyles: {
            width: '300px'
        },
        alt: 'Это картинка'
    }),
    new ColumnsBlock([
        'Приложение на чистом JavaScript, без использования библиотек',
        'Узнаешь как работают принципы SOLID и ООП в JavaScript за один курс',
        'JavaScript - это просто, интересно. Научись создавать любые UI своими руками'
    ], {
        styles: {
            background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
            color: '#fff',
            'font-weight': '700'
        }
    }),
    new TextBlock(text, {
        styles: {
            background: 'linear-gradient(to left, #f2994a, #f2c94c)',
            padding: '1rem',
            'font-weight': '700'
        }
    })
];
