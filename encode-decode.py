import matplotlib.pyplot as plt
import numpy
import pickle
import time
from autoencode import layers
with open("data/data_2.data", "rb") as f:
    a = pickle.load(f)
with open("data/test_data.data","rb") as f:
    z = pickle.load(f)
from learn import Network
for i in z:
    net = Network(layers,a[0],a[1])
    output = net.feedforward(i[0]).reshape(25,-1)
    plt.imshow(output, cmap = "gray")
    plt.show()