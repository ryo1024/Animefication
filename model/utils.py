import os
import numpy as np
import tensorflow as tf
from PIL import Image

def load_images(path):
    images = []
    i = 0
    for root, dirs, files in os.walk(path):
        for file in files:
            #print(root + '/' + file)
            try:
                img = load_img(root + '/' + file)
            except OSError:
                continue
            images.append([img])
            if i == 2000:
                break
            i += 1
    return np.array(images)

def load_img(path_to_img):
    """max_dim = 512
    img = tf.io.read_file(path_to_img)
    img = tf.image.decode_image(img, channels=3)
    img = tf.image.convert_image_dtype(img, tf.float32)

    shape = tf.cast(tf.shape(img)[:-1], tf.float32)
    long_dim = max(shape)
    scale = max_dim / long_dim

    new_shape = tf.cast(shape * scale, tf.int32)

    img = tf.image.resize(img, new_shape)
    img = img[tf.newaxis, :]"""
    im = Image.open(path_to_img)
    im = im.resize((256, 256), Image.ANTIALIAS)
    """new_width = 256
    new_height = 256
    width, height = im.size  # Get dimensions

    left = (width - new_width) / 2
    top = (height - new_height) / 2
    right = (width + new_width) / 2
    bottom = (height + new_height) / 2

    # Crop the center of the image
    im = im.crop((left, top, right, bottom))"""
    return  np.asarray(im)

if __name__ == '__main__':
    load_images('./data/style_images/attack_on_titan')
    load_images('./data/anime_faces')