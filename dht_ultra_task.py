import random
import time
import csv
import matplotlib.pyplot as plt

# Function to generate random distance (0 to 200 cm) and temperature (20 to 30°C)
def generate_random_data():
    distance = random.uniform(0, 200)  # Random distance in cm
    temperature = random.uniform(20, 30)  # Random temperature in °C
    return distance, temperature

# Logging and plotting
log_file = 'sensor_log.csv'
data = {'Time': [], 'Distance (cm)': [], 'Temperature (C)': []}

try:
    with open(log_file, mode='w', newline='') as file:
        writer = csv.writer(file)
        writer.writerow(['Time', 'Distance (cm)', 'Temperature (C)'])
        start_time = time.time()
        while True:
            current_time = time.time() - start_time
            distance, temperature = generate_random_data()
            
            writer.writerow([current_time, distance, temperature])
            data['Time'].append(current_time)
            data['Distance (cm)'].append(distance)
            data['Temperature (C)'].append(temperature)
            print(f"Time: {current_time:.2f}s, Distance: {distance:.2f}cm, Temperature: {temperature:.2f}C")
            time.sleep(2)  # Adjust the frequency of readings

except KeyboardInterrupt:
    print("Logging stopped")

# Plotting
plt.figure()
plt.plot(data['Time'], data['Distance (cm)'], label='Distance (cm)')
plt.plot(data['Time'], data['Temperature (C)'], label='Temperature (C)')
plt.xlabel('Time (s)')
plt.ylabel('Sensor Readings')
plt.title('Distance and Temperature Over Time')
plt.legend()
plt.grid(True)
plt.savefig('sensor_plot.png')
plt.show()
