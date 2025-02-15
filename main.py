from db import db

animais_collection = db["tbl_animais"]

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