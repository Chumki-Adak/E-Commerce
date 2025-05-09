import p1_img from "./MP1.jpg"
import p2_img from "./MP2.jpg"
import p3_img from "./MP3.jpg"
import p4_img from "./MP4.jpg"
import p5_img from "./MP5.jpg"
import p6_img from "./MP6.jpg"
import p7_img from "./MP7.jpg"
import p8_img from "./MP8.jpg"
import p9_img from "./WP9.jpg"
import p10_img from "./WP10.jpg"
import p11_img from "./WP11.jpg"
import p12_img from "./WP12.jpg"
import p13_img from "./WP13.jpg"
import p14_img from "./WP14.jpg"
import p15_img from "./WP15.jpg"
import p16_img from "./K16.jpg"
import p17_img from "./K17.jpg"
import p18_img from "./K18.jpg"
import p19_img from "./K19.jpg"
import p20_img from "./K20.jpg"
import p21_img from "./K21.jpg"
import p22_img from "./K22.jpg"
import p23_img from "./K23.jpg"
import p24_img from "./K24.jpg"


let all_products = [


  {
  "id": 1,
  "name": "Men's Classic T-Shirt",
  "category": "men",
  "image": p1_img,
  "new_price": 19.99,
  "old_price": 29.99,
  "description": "A soft, breathable cotton T-shirt with a timeless crew neck design—perfect for everyday wear."
},
{
  "id": 2,
  "name": "Men's Slim Jeans",
  "category": "men",
  "image": p2_img,
  "new_price": 34.99,
  "old_price": 44.99,
  "description": "Modern slim-fit jeans crafted from stretch denim for comfort and a flattering look."
},
{
  "id": 3,
  "name": "Men's Hoodie",
  "category": "men",
  "image": p3_img,
  "new_price": 39.99,
  "old_price": 49.99,
  "description": "Cozy fleece hoodie with a front pocket and adjustable drawstring—ideal for casual days."
},
{
  "id": 4,
  "name": "Men's Jacket",
  "category": "men",
  "image": p4_img,
  "new_price": 59.99,
  "old_price": 79.99,
  "description": "Stylish yet durable jacket with a full zip closure, designed to keep you warm and sharp."
},
{
  "id": 5,
  "name": "Men's Chinos",
  "category": "men",
  "image": p5_img,
  "new_price": 29.99,
  "old_price": 39.99,
  "description": "Versatile chinos with a slim cut, suitable for both office wear and weekend outings."
},
{
  "id": 6,
  "name": "Men's Polo Shirt",
  "category": "men",
  "image": p6_img,
  "new_price": 24.99,
  "old_price": 34.99,
  "description": "Classic polo shirt with a comfortable fit and collar—ideal for smart-casual occasions."
},
{
  "id": 7,
  "name": "Men's Shorts",
  "category": "men",
  "image": p7_img,
  "new_price": 21.99,
  "old_price": 31.99,
  "description": "Lightweight cotton shorts with a relaxed fit, perfect for summer and outdoor activities."
},
{
  "id": 8,
  "name": "Men's Formal Shirt",
  "category": "men",
  "image": p8_img,
  "new_price": 32.99,
  "old_price": 42.99,
  "description": "Elegant button-down shirt with a slim fit, great for formal meetings or evening events."
},
{
  "id": 9,
  "name": "Women's Summer Dress",
  "category": "women",
  "image": p9_img,
  "new_price": 29.99,
  "old_price": 39.99,
  "description": "Light and breezy summer dress with floral patterns, perfect for warm days and beach walks."
},
{
  "id": 10,
  "name": "Women's Denim Jacket",
  "category": "women",
  "image": p10_img,
  "new_price": 49.99,
  "old_price": 59.99,
  "description": "Trendy cropped denim jacket with a vintage wash—adds an edge to any outfit."
},

   
{
  "id": 11,
  "name": "Women's Skirt",
  "category": "women",
  "image": p11_img,
  "new_price": 24.99,
  "old_price": 34.99,
  "description": "A flowy, comfortable skirt that pairs well with both casual and dressy tops."
},
{
  "id": 12,
  "name": "Women's Cardigan",
  "category": "women",
  "image": p12_img,
  "new_price": 34.99,
  "old_price": 44.99,
  "description": "Soft, lightweight cardigan perfect for layering during cooler days or evenings."
},
{
  "id": 13,
  "name": "Women's Trousers",
  "category": "women",
  "image": p13_img,
  "new_price": 28.99,
  "old_price": 38.99,
  "description": "Tailored trousers offering a sleek, polished look for office wear or evening events."
},
{
  "id": 14,
  "name": "Women's Hoodie",
  "category": "women",
  "image": p14_img,
  "new_price": 36.99,
  "old_price": 46.99,
  "description": "A cozy hoodie with a relaxed fit, perfect for lounging or casual outings."
},
{
  "id": 15,
  "name": "Women's Leggings",
  "category": "women",
  "image": p15_img,
  "new_price": 22.99,
  "old_price": 32.99,
  "description": "Comfortable leggings made with stretchy fabric, ideal for exercise or casual wear."
},
{
  "id": 16,
  "name": "Kids' T-Shirt",
  "category": "kids",
  "image": p16_img,
  "new_price": 14.99,
  "old_price": 19.99,
  "description": "A cute and comfy T-shirt for kids, made from soft cotton to keep them comfortable all day."
},
{
  "id": 17,
  "name": "Kids' Jeans",
  "category": "kids",
  "image": p17_img,
  "new_price": 19.99,
  "old_price": 29.99,
  "description": "Durable and stylish jeans for kids, offering both comfort and a great fit."
},
{
  "id": 18,
  "name": "Kids' Jacket",
  "category": "kids",
  "image": p18_img,
  "new_price": 29.99,
  "old_price": 39.99,
  "description": "A warm jacket designed for kids, perfect for chilly days or outdoor adventures."
},
{
  "id": 19,
  "name": "Kids' Shorts",
  "category": "kids",
  "image": p19_img,
  "new_price": 12.99,
  "old_price": 17.99,
  "description": "Comfortable and lightweight shorts, perfect for summer activities and play."
},
{
  "id": 20,
  "name": "Kids' Hoodie",
  "category": "kids",
  "image": p20_img,
  "new_price": 24.99,
  "old_price": 34.99,
  "description": "A cozy hoodie for kids that keeps them warm while looking stylish."
},
{
  "id": 21,
  "name": "Kids' Dress",
  "category": "kids",
  "image": p21_img,
  "new_price": 19.99,
  "old_price": 27.99,
  "description": "Adorable dress for girls, perfect for casual outings or special occasions."
},
{
  "id": 22,
  "name": "Kids' Pajamas",
  "category": "kids",
  "image": p22_img,
  "new_price": 18.99,
  "old_price": 25.99,
  "description": "Soft and cozy pajamas designed to provide a good night's sleep for your little ones."
},
{
  "id": 23,
  "name": "Kids' Raincoat",
  "category": "kids",
  "image": p23_img,
  "new_price": 26.99,
  "old_price": 36.99,
  "description": "A waterproof raincoat that keeps your child dry and stylish during rainy weather."
},
{
  "id": 24,
  "name": "Kids' Sweater",
  "category": "kids",
  "image": p24_img,
  "new_price": 21.99,
  "old_price": 31.99,
  "description": "A cozy sweater for kids, perfect for layering during cooler months."
}

  ]
  export default all_products;

  