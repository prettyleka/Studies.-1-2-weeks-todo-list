# names = ["a", "b", "c"]
# ages = [1, 2, 3]
# for k, v in zip(names, ages):
# 	print(k + " is " + str(v) + " years old")
#

# nums=[]
# i=0
# while i < 101:
# 	nums.append(i)
# 	i = i + 1
# print(nums)

# nums=[]
# i=0
# sum = 0
# while i < 101:
# 	nums.append(i)
# 	i = i + 1
# print(nums)
# for num in nums:
# 	if num<20 or num>80:
# 		sum = sum + num
# print(sum)

# equipment = ["hammer", "ruler", "torch", "scissors", "screwdriver", "scissors", "torch", "hammer", "hammer", "ruler"]
# most_common_item = ""
# highest_count = 0
#
# for item in equipment:
# 	count_of_item = equipment.count(item)
# 	highest_count = highest_count + 1
# 	if count_of_item > highest_count:
# 		most_common_item = item
#
# print("The item that appears the most in the list is " + most_common_item)


# from random import randint
# idle_process_ids = [17, 18, 32, 6, 41, 8, 23, 88, 91]
# random_number = randint(0,100)
# count = 0
# for random_number in range(100):
# 	while len(idle_process_ids) > 5:
# 		if random_number in idle_process_ids:
# 			idle_process_ids.remove(random_number)
# 			count=count + 1
# 		else:
# 			random_number += 1
# 			count=count + 1
#
#
# print(idle_process_ids, count)

# salaries = [1200, 2500, 1800, 1600, 1800, 700, 3200, 1500, 1300, 1300, 850, 1900]
# sum = 0
# for salary in salaries:
# 	sum = sum + salary
# print(sum)
# average_salary = sum/len(salaries)
# print(average_salary)
# list = []
# for i in salaries:
# 	if i > average_salary:
# 		list.append(i)
# print(list)
# sum_x = 0
# for x in list:
# 	sum_x = sum_x + x
# print(sum_x)
# average_list = sum_x/len(list)
# print(average_list)


# lyrics = ["I", "am", "a", "rock,", "I", "am", "an", "island.", "I", "am", "also", "a", "couch,", "a", "mirror,", "and", "I", "am", "best", "known", "for", "being", "a", "letter", "of", "the", "alphabet.", "On", "some", "days,", "I", "am", "everything,", "on", "others", "I", "am", "nothing.", "I", "am", "both", "and", "I", "am", "neither.", "I", "am,", "whatever", "you", "say", "I", "am", "-", "if", "I", "wasn't,", "then", "why", "would", "I", "say", "I", "am?"]
# count = 0
# for x in lyrics:
# 	if x == "I":
# 		count = count + 1
# print(count)

