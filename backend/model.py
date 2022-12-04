import numpy as np
import pandas as pd
import pickle
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.svm import SVC
from sklearn.metrics import accuracy_score

df = pd.read_csv("/Users/olufunbi/Desktop/Software/Proheart/heart.csv")

x = df.iloc[:, 1:-1].values
y = df.iloc[:, -1].values

# print(x)
# print(y)

x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=0.2, random_state=0)

# We chose to use the Support Vector Machine model.
scaler = StandardScaler()
x_train = scaler.fit_transform(x_train)
x_test = scaler.fit_transform(x_test)

# Fitting SVC to the Training set
model = SVC(probability=True)
model.fit(x_train, y_train)
predicted = model.predict(x_test)
print("The Accuracy of SVM is: ", accuracy_score(y_test, predicted) * 100)


# Saving model to disk
pickle.dump(model, open('model.pkl', 'wb'))

# Loading model to compare the results
model = pickle.load(open('model.pkl', 'rb'))
