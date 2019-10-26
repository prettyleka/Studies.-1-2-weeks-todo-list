# investments=[3605,5355,1664,3172,436,1916,160,3738,2902,4114,3462,1323,2102,4253,1964,4566]
# for investment in investments:
# 	if investment < 1800:
# 		print(investment)


salaries = [1200, 2500, 1800, 1600, 1800, 700, 3200, 1500, 1300, 1300, 850, 1900]
sum = 0
for salary in salaries:
    sum = sum + salary

total_average = sum / len(salaries)
above_average_salaries = []

for salary in salaries:
    if salary > total_average:
        above_average_salaries.append(salary)

print(above_average_salaries)



# clients = ["Bethany", "Clarissa", "Derek", "Evan", "Felicity"]
# for client in range(len(clients)):
# 	print(str(client + 1) + ". " + clients[client])

people = ["Holly", "Irene", "Jessica", "Kyle", "Mike", "Nadine", "Olly"]
person_of_interest = "smth"
index = 0
found = False

# while not found and index < len(people):
# 		if people[index] == person_of_interest:
# 			found = True
# 			print(person_of_interest + "'s index in the list is: " + str(index))
# 		else:
# 			index = index + 1
# 			print("person_of_interest is not found" + str(index))


