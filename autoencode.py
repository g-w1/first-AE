from learn import Network
import pickle
import random
layers = [625,10,625]
f = open("data/data_expanded.data","rb")
training_data = pickle.load(f)
f.close()
training_data = [(x[0],x[0]) for x in training_data]
learningrate = 3
mini_batch_size = 2
epochs = 50
net = Network(layers)
net.SGD(training_data, epochs, mini_batch_size, learningrate)
f = open("data/data_2.data","wb")
pickle.dump([net.weights,net.biases],f)
f.close