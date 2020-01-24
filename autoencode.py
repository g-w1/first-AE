from learn import Network
import pickle
import random
hiddensize = 20
layers = [625,hiddensize,625]
if __name__ == "__main__":
    f = open("data/data_expanded.data","rb")
    training_data = pickle.load(f)
    f.close()
    training_data = [(x[0],x[0]) for x in training_data]
    learningrate = 1.7
    mini_batch_size = 10
    epochs = 25
    net = Network(layers)
    net.SGD(training_data, epochs, mini_batch_size, learningrate)
    f = open("data/data_2.data","wb")
    pickle.dump([net.weights,net.biases],f)
    f.close
    print("done")
    import os
    os.system("python3 encode-decode.py")