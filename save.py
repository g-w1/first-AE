import json
import pickle
import numpy
f= open('data/data_2.data','rb')
a = pickle.load(f)
f.close()
weights = [z.tolist() for z in a[0]]
biases = [z.tolist() for z in a[1]]
with open('docs/weights_biases.json', 'w', encoding='utf-8') as f:
    json.dump({"weights":weights,"biases":biases}, f, ensure_ascii=False, indent=4)