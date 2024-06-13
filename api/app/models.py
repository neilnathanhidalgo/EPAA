import pickle

def load_model():
    model = pickle.load(open('D:/Estudios/Ciclo X 2024-I/DPY/TG/datos/finalized_model.pkl', 'rb'))
    return model
