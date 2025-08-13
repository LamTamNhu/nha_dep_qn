import localFont from 'next/font/local'
import {Mulish} from 'next/font/google'

export const fancyFont = localFont({
    src: './UTM-Yen-Tu.ttf',
})

export const utmAvo = localFont({
    src: [
        {path: './UTMAvo.ttf', weight: '400', style: 'normal'},
        {path: './UTMAvoBold.ttf', weight: '700', style: 'normal'},
        {path: './UTMAvoItalic.ttf', weight: '400', style: 'italic'},
        {path: './UTMAvoBold_Italic.ttf', weight: '700', style: 'italic'},
    ],
})

export const mulish = Mulish({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-mulish',
})