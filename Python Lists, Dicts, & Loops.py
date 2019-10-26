# backpack = {
#     "owner": "Dora",
#     "base_weight": 1,
#     "items": [
#         {"name": "rope", "weight": 1},
#         {"name": "hatchet", "weight": 2},
#         {"name": "mirror", "weight": 1},
#         {"name": "water", "weight": 5},
#     ]
# }
# print(backpack["items"][3]["weight"] + 1)

# library = {
# 	"books" : [{"title" : "Name of the Wind", "author" : "Patrick Rothfuss"},
# 			   {'title': "A", "author" : "B"},
# 			   {'title' :"E", "author" : "C"}]
# }
# print(len(library["books"]) - 1)
# print(library["books"][2]["author"])
#
# for library["book"] in library["books"]:
# 	if library["book"]["title"] == "Name of the Wind":
# 		print(library["book"]["author"])


# names = ["Ashley", "Donovan", "Lucas"]
# ages = [23, 47, 18]
# people = []
# people = [{"name": names[0], "age": str(ages[0])}, {"name": names[1], "age": str(ages[1])}, {"name": names[2], "age": str(ages[2])}]
# print(people)
# print(people[0]["name"] + " is " + people[0]["age"] + " years now"+ " , ",
# 	  people[1]["name"] + " is " + people[1]["age"] + " years now"+ " , ",
# 	  people[2]["name"] + " is " + people[2]["age"] + " years now" + " , ")

# employee_data=[
# 	{"employee_id": 412,"department": "Finance","salary": 1300},
# 	{"employee_id": 833,"department": "Sales","salary": 4200},
# 	{"employee_id": 347,"department": "Sales","salary": 2800},
# 	{"employee_id": 148,"department": "Finance","salary": 1200},
# 	{"employee_id": 334,"department": "Finance","salary": 2600},
# 	{"employee_id": 533,"department": "Sales","salary": 1800},
# 	{"employee_id": 992,"department": "Sales","salary": 3100},
# ]
# department_salaries={}
# countF = 0
# countS = 0
# for i in employee_data:
# 		if i['department'] not in department_salaries:
# 			department_salaries.setdefault(i['department'])
# for i in employee_data:
# 	if i['department'] == 'Finance':
# 		countF= countF + i['salary']
# 		countF += 1
# 	if i['department'] == 'Sales':
# 		countS = countS + i['salary']
# 		countS += 1
# department_salaries['Finance'] = countF
# department_salaries['Sales'] = countS
#
#
#
# print(countF, countS)
# print(department_salaries)

code = {
    "0": "A",
    "1": "E",
    "2": "O",
    "3": "U",
    "4": "G",
    "5": "R",
    "6": "T",
    "7": "U",
    "8": "Y"
}

encrypted_message = "82705145106"
new = []
keys = code.keys()
for l in encrypted_message:
	for key in keys:
		if key == l:
			new.append(code[key])
print(new)





