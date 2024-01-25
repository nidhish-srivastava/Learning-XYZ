import numpy as np

def perceptron_learning_algorithm(inputs, labels, learning_rate=0.1, max_iterations=1000):
    num_inputs = len(inputs[0])
    weights = np.random.rand(num_inputs)
    threshold = np.random.rand()

    for iteration in range(max_iterations):
        converged = True
        for i in range(len(inputs)):
            net_input = np.dot(inputs[i], weights) - threshold
            predicted_label = 1 if net_input >= 0 else 0
            error = labels[i] - predicted_label

            if error != 0:
                weights += learning_rate * error * inputs[i]
                threshold -= learning_rate * error
                converged = False

        if converged:
            print(f"Convergence reached in {iteration + 1} iterations.")
            break

    if not converged:
        print("Did not converge within the specified number of iterations.")

    predictions = [1 if np.dot(input_data, weights) - threshold >= 0 else 0 for input_data in inputs]
    print("Predictions:", predictions)

# Example usage:
inputs = np.array([[0, 0], [0, 1], [1, 0], [1, 1]])
labels = np.array([0, 0, 0, 1])

perceptron_learning_algorithm(inputs, labels)
