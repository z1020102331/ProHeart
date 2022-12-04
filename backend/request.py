import requests

# URL
url = 'http://localhost:5000/predict'

# Change the value of experience that you want to test
payload = {
        "age": 50,
        "sex": 1,
        "chest_pain_type": 0,
        "resting_BP": 300,
        "cholesterol": 120,
        "fasting_BS": 1,
        "resting_ECG": 2,
        "max_HR": 120,
        "exercise_Angina": 1,
        "old_Peak": 2.5,
        "thall": 3,
        "output": 1
}

r = requests.get(url, json=payload)

print(r.json())
# print(r.json())
# print("TEXT")
