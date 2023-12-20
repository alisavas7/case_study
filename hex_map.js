const hex_map = new Map();
const color_name = [
    'indian red', 'light coral', 'salmon', 'dark salmon', 'light salmon', 'crimson', 'red', 'fire brick', 'dark red',
    'pink', 'light pink', 'hot pink', 'deep pink', 'medium violet red','pale violet red',
    'coral', 'tomato', 'orange red', 'dark orange', 'orange',
    'gold', 'yellow', 'light yellow', 'lemon chiffon', 'light goldenron yellow', 'papaya whip', 'moccasin', 'peach puff',
    'pale goldenrod', 'khaki', 'dark khaki',
    'lavender', 'thistle', 'plum', 'violet', 'orchid', 'magenta',
    'medium orchid', 'medium purple', 'rebecca purple', 'blue violet', 'dark violet', 'dark orchid',
    'dark magenta', 'purple', 'indigo', 'slate blue', 'dark slate blue', 'medium slate blue',
    'green yellow', 'chartreuse', 'lawn green', 'lime', 'lime green', 'pale green', 'light green', 'medium spring green',
    'spring green', 'medium sea green', 'sea green', 'forest green', 'green', 'dark green', 'yellow green', 'olive drab',
    'olive', 'dark olive green', 'medium aquamarine', 'dark sea green', 'light sea green', 'dark cyan', 'teal',
    'cyan', 'light cyan', 'pale turquoise', 'aquamarine', 'turquoise', 'medium turquoise', 'dark turquoise',
    'cadet blue', 'steel blue', 'light steel blue', 'powder blue', 'light blue', 'sky blue', 'light sky blue',
    'deep sky blue', 'dodger blue', 'cornflower blue', 'royal blue', 'blue', 'medium blue', 'dark blue', 'navy', 'midnight blue',
    'cornsilk', 'blanched almond', 'bisque', 'navajo white', 'wheat', 'burly wood', 'tan', 'rosy brown', 'sandy brown',
    'goldenrod', 'dark goldenrod', 'peru', 'saddle brown', 'sienna', 'brown', 'maroon',
    'white', 'snow', 'honey dew', 'mint cream', 'azure', 'alice blue', 'ghost white', 'white smoke', 'sea shell',
    'beige', 'old lace', 'floral white', 'ivory', 'antique white', 'linen', 'lavender blush', 'misty rose',
    'gainsboro', 'light gray', 'silver', 'dark gray', 'gray', 'dim gray', 'light slate gray', 'slate gray',
    'dark slate gray', 'black'
];
const hex_codes = [
    '#CD5C5C', '#F08080', '#FA8072', '#E9967A', '#FFA07A', '#DC143C', '#FF0000', '#B22222', '#8B0000',
    '#FFC0CB', '#FFB6C1', '#FF69B4', '#FF1493', '#C71585', '#DB7093',
    '#FF7F50', '#FF6347', '#FF4500', '#FF8C00', '#FFA500',
    '#FFD700', '#FFFF00', '#FFFFE0', '#FFFACD', '#FAFAD2', '#FFEFD5', '#FFE4B5', '#FFDAB9',
    '#EEE8AA', '#F0E68C', '#BDB76B',
    '#E6E6FA', '#D8BFD8', '#DDA0DD', '#EE82EE', '#DA70D6', '#FF00FF',
    '#BA55D3', '#9370DB', '#663399', '#8A2BE2', '#9400D3', '#9932CC',
    '#8B008B', '#800080', '#4B0082', '#6A5ACD', '#483D8B', '#7B68EE',
    '#ADFF2F', '#7FFF00', '#7CFC00', '#00FF00', '#32CD32', '#98FB98', '#90EE90', '#00FA9A', '#00FF7F', '#3CB371',
    '#2E8B57', '#228B22', '#008000', '#006400', '#9ACD32', '#6B8E23', '#808000', '#556B2F', '#66CDAA', '#8FBC8B',
    '#20B2AA', '#008B8B', '#008080',
    '#00FFFF', '#E0FFFF', '#AFEEEE', '#7FFFD4', '#40E0D0', 
    '#48D1CC', '#00CED1', '#5F9EA0', '#4682B4', '#B0C4DE', '#B0E0E6', 
    '#ADD8E6', '#87CEEB', '#87CEFA', '#00BFFF', '#1E90FF', '#6495ED',
    '#0000FF', '#0000CD', '#00008B', '#000080', '#191970',
    '#FFF8DC', '#FFEBCD', '#FFE4C4', '#FFDEAD', '#F5DEB3', '#DEB887', '#D2B48C', '#BC8F8F',	
	'#F4A460', '#DAA520', '#B8860B', '#CD853F', '#D2691E', '#8B4513', '#A0522D', '#A52A2A', '#800000',
    '#FFFFFF', '#FFFAFA', '#F0FFF0', '#F5FFFA', '#F0FFFF', '#F0F8FF', '#F8F8FF', '#F5F5F5', '#FFF5EE', '#F5F5DC', 
    '#FDF5E6', '#FFFAF0', '#FFFFF0', '#FAEBD7', '#FAF0E6', '#FFF0F5', '#FFE4E1',	
    '#DCDCDC', '#D3D3D3', '#C0C0C0', '#A9A9A9', '#808080', '#696969', '#778899', '#708090', '#2F4F4F', '#000000'
];

hex_codes.forEach((hex, index) => {
    hex_map.set(hex, color_name[index]);
});