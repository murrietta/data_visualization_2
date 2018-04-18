#setup a dictionary of posterior probabilities. The top level key is the current loc
#the second level key is the next days loc. we are modeling daily census locations
probs = {
	"APO" : {"APO" : 0.90, "CRA" : 0.01, "DIS" : 0.02, "EXP" : 0.01, "PCU" : 0.01,
		"NCU" : 0.01, "REH" : 0.01, "VOY" : 0.03},
	"CRA" : {"APO" : 0.01, "CRA" : 0.90, "DIS" : 0.02, "EXP" : 0.01, "PCU" : 0.01,
		"NCU" : 0.01, "REH" : 0.01, "VOY" : 0.03},
	"DIS" : {"APO" : 0.02, "CRA" : 0.01, "DIS" : 0.90, "EXP" : 0.01, "PCU" : 0.01,
		"NCU" : 0.01, "REH" : 0.01, "VOY" : 0.03},
	"EXP" : {"APO" : 0.01, "CRA" : 0.01, "DIS" : 0.02, "EXP" : 0.90, "PCU" : 0.01,
		"NCU" : 0.01, "REH" : 0.01, "VOY" : 0.03},
	"PCU" : {"APO" : 0.01, "CRA" : 0.01, "DIS" : 0.02, "EXP" : 0.01, "PCU" : 0.90,
		"NCU" : 0.01, "REH" : 0.01, "VOY" : 0.03},
	"NCU" : {"APO" : 0.01, "CRA" : 0.01, "DIS" : 0.02, "EXP" : 0.01, "PCU" : 0.01,
		"NCU" : 0.90, "REH" : 0.01, "VOY" : 0.03},
	"REH" : {"APO" : 0.01, "CRA" : 0.01, "DIS" : 0.02, "EXP" : 0.01, "PCU" : 0.01,
		"NCU" : 0.01, "REH" : 0.90, "VOY" : 0.03},
	"VOY" : {"APO" : 0.03, "CRA" : 0.01, "DIS" : 0.02, "EXP" : 0.01, "PCU" : 0.01,
		"NCU" : 0.01, "REH" : 0.01, "VOY" : 0.90}
	}

#test out to see if the probs add up to 1
#[sum(probs[loc].values()) for loc in probs]

#this will randomly choose based on the weights assigned above
from numpy.random import choice #takes a little work but it will give us random selection based on weight

def nextLoc(curLoc):
	i = choice(len(probs[curLoc]),1, probs[curLoc].values())[0]
	return list(probs[curLoc].keys())[i]

#simulate a patient stay
#on average a patient stays for 5 days 
#lets simulate 20 patients starting in random places
slocs = [list(probs.keys())[choice(len(probs),1)[0]] for i in range(20)]
pats = {"pat_{:02}".format(i): {1:loc} for i, loc in enumerate(slocs)}

#an entry in pats looks like: 'pat_00': {1: 'CRA'
#this means that pat_00 was in "CRA" on day 1

#now for each patient lets determine how many days they stay and where they go on those days given
#their day 1 location
#lets assume the following distribution on number of days stayed.
#in truth there is likely a different distribution depending on what kind of patient you are (ICU, NICU, etc)
days = {2: 0.15, 3: 0.10, 4: 0.20, 5: 0.30, 6: 0.10, 7: 0.05, 8: 0.05, 9: 0.025, 10: 0.025}

#now we'll loop through pats, determine how many days they stay, then fill in the daily locations
for pat in pats.keys():
	numDays = list(days.keys())[choice(len(days),1)[0]] + 1
	for i in range(2, numDays):
		curLoc = pats[pat][i - 1]
		pats[pat].update({i: nextLoc(curLoc)})

#now we have patient locations for each day
#lets pretend pat_00 was sick but didn't get isolated, we want to determine who was ever on the same unit as pat_00 at the same time
links = []
rkeys = [x for x in pats.keys()]
for key in pats.keys():
	rkeys.remove(key)
	for day, loc in pats[key].items():
		for rkey in rkeys:
			if pats[rkey].get(day, False) != False:
				if pats[rkey][day] == loc:
					links.append({'source': int(key.replace("pat_","")), 'target': int(key.replace("pat_",""))})
len(links)
