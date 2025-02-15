from db import db

animais_collection = db["tbl_animais"]

#CLASS TUBAROES

class Especie_tubarao:
    def __init__(self, nome, focinho, boca, fendas_branquiais, nadadeira_caudal, clasper_bifurcado, margem_segnadadeiradorsal):
        self.nome = nome
        self.focinho = focinho
        self.boca = boca
        self.fendas_branquiais = fendas_branquiais
        self.nadadeira_caudal = nadadeira_caudal
        self.clasper_bifurcado = clasper_bifurcado
        self.margem_segnadadeiradorsal = margem_segnadadeiradorsal

def find_especie_tubarao(especies, focinho, boca, fendas_branquiais, nadadeira_caudal, clasper_bifurcado, margem_segnadadeiradorsal):
    for especie in especies:
        if especie.focinho == focinho and especie.boca == boca and especie.fendas_branquiais == fendas_branquiais and especie.nadadeira_caudal == nadadeira_caudal and especie.clasper_bifurcado == clasper_bifurcado and especie.margem_segnadadeiradorsal == margem_segnadadeiradorsal:
            return especie
    return None

# #CLASS RAIAS

class Especie_raia:
    def __init__(self, nome, focinho, proboscide, nadadeira_anal, nadadeira_caudal, clasper_bifurcado, margem_segnadadeiradorsal):
        self.nome = nome
        self.focinho = focinho
        self.proboscide = proboscide
        self.nadadeira_anal = nadadeira_anal
        self.nadadeira_caudal = nadadeira_caudal
        self.clasper_bifurcado = clasper_bifurcado
        self.margem_segnadadeiradorsal = margem_segnadadeiradorsal

def find_especie_raia(especies, focinho, proboscide, nadadeira_anal, nadadeira_caudal, clasper_bifurcado, margem_segnadadeiradorsal):
    for especie in especies:
        if especie.focinho == focinho and especie.proboscide == proboscide and especie.nadadeira_anal == nadadeira_anal and especie.nadadeira_caudal == nadadeira_caudal and especie.clasper_bifurcado == clasper_bifurcado and especie.margem_segnadadeiradorsal == margem_segnadadeiradorsal:
            return especie
    return None


#CLASS QUIMERAS

class Especie:
    def __init__(self, nome, focinho, proboscide, nadadeira_anal, nadadeira_caudal, clasper_bifurcado, margem_segnadadeiradorsal):
        self.nome = nome
        self.focinho = focinho
        self.proboscide = proboscide
        self.nadadeira_anal = nadadeira_anal
        self.nadadeira_caudal = nadadeira_caudal
        self.clasper_bifurcado = clasper_bifurcado
        self.margem_segnadadeiradorsal = margem_segnadadeiradorsal

def find_especie(especies, focinho, proboscide, nadadeira_anal, nadadeira_caudal, clasper_bifurcado, margem_segnadadeiradorsal):
    for especie in especies:
        if especie.focinho == focinho and especie.proboscide == proboscide and especie.nadadeira_anal == nadadeira_anal and especie.nadadeira_caudal == nadadeira_caudal and especie.clasper_bifurcado == clasper_bifurcado and especie.margem_segnadadeiradorsal == margem_segnadadeiradorsal:
            return especie
    return None

####REPLICAR AS 3 ABAS DE CODIGO PARA CADA ANIMAL E EM SEGUIDA

##IFS E ELSES PARA SABER SE VOU ENTRAR AQUI OU NAO

#INPUT DA 1º PERGUNTA
pergunta_1 = input("Quantidade de fendas: (e.g., 1 | 5 à 7)")
if pergunta_1 == '1':
    user_focinho = input("Focinho: (e.g., Alongado e Comprimido | Curto, rombico ou conico)")
    user_proboscide = input("Proboscide: (e.g., Sim | Nao | Nulo)")
    user_nadadeira_anal = input("Nadadeira Anal: (e.g., Sim | Nao | Nulo)")
    user_nadadeira_caudal = input("Nadadeira Caudal: (e.g., Sim | Nao | Nulo)")
    user_clasper_bifurcado = input("Clasper Bifurcado: (e.g., Sim | Nao | Nulo)")
    user_margem_segnadadeiradorsal = input("Margem Segunda Nadadeira Dorsal: (e.g., Reto, Ondulado, Nulo)")

    animal = animais_collection.find_one({
        "Quantidade de aberturas branquiais" : int(pergunta_1),
        "Focinho" : user_focinho,
        "Nadadeira Caudal" : user_nadadeira_caudal,
        "Proboscide" : user_proboscide,
        # "Margem da segunda nadadeira dorsal" : user_margem_segnadadeiradorsal
        ##Preencher o que falta aqui
    })

    matched_especie = animal["Especie"]

else:
    pergunta_2 = input("Posição das branquias (e.g., Ventrais a cabeça | Laterais a cabeça)")
    if pergunta_2 == "Laterais a cabeça":
        user_focinho = input("Focinho: (e.g., Arredondado | Cabeça larga e comprimida | Estreita e Pontiaguda | )")
        # user_proboscide = input("Proboscide: (e.g., Sim | Nao | Nulo)")
        # user_nadadeira_anal = input("Nadadeira Anal: (e.g., Sim | Nao | Nulo)")
        # user_nadadeira_caudal = input("Nadadeira Caudal: (e.g., Sim | Nao | Nulo)")
        # user_clasper_bifurcado = input("Clasper Bifurcado: (e.g., Sim | Nao | Nulo)")
        # user_margem_segnadadeiradorsal = input("Margem Segunda Nadadeira Dorsal: (e.g., Reto, Ondulado, Nulo)")

        animal = animais_collection.find_one({
            "Quantidade de aberturas branquiais" : pergunta_1,
            "Posição das branquias" : pergunta_2,
            "Focinho" : user_focinho,
        })

        matched_especie = animal["Especie"]

    else:
        user_focinho = input("Focinho: (e.g., Alongado e Comprimido | Curto, rombico ou conico)")
        user_boca = input("Proboscide: (e.g., Sim | Nao | Nulo)")
        user_fendas_branquiais = input("Nadadeira Anal: (e.g., Sim | Nao | Nulo)")
        user_nadadeira_caudal = input("Nadadeira Caudal: (e.g., Sim | Nao | Nulo)")
        user_clasper_bifurcado = input("Clasper Bifurcado: (e.g., Sim | Nao | Nulo)")
        user_margem_segnadadeiradorsal = input("Margem Segunda Nadadeira Dorsal: (e.g., Reto, Ondulado, Nulo)")


        animal = animais_collection.find_one({
            "Quantidade de aberturas branquiais" : pergunta_1,
            "Posição das branquias" : pergunta_2,
            "Formato do corpo" : user_margem_segnadadeiradorsal
            ##Preencher o que falta aqui
        })

        matched_especie = animal["Especie"]
        
# Encontrando a especie

# Exibindo o resultado
if matched_especie:
    print(f"Espécie identificada: {matched_especie}")
else:
    print("Nenhuma espécie foi identificada")
