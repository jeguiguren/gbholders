#!/usr/bin/python

def config(section='aws'):

	sections = {
		'aws': {
			'host': 'gbholders-db.cvxhuaxypfds.us-east-2.rds.amazonaws.com',
			'database': 'gbholders-db',
			'user': 'gbholders',
			'password': 'Gbholders2020!'
		}
	}
 
	# get section, default to aws
	db = {}
	if section in sections.keys():
		db = sections[section]
	else:
		raise Exception('Section {0} not found'.format(section))
 
	return db
