# To parse html
from bs4 import BeautifulSoup



class Domain:

	'''
	[finds file]
	[fragment] ~ [path fragment]
	'''
	def find (fragment) :
		return

	'''
	[finds all files]
	[fragment] ~ [path fragment]
	'''
	def find_all (fragment) :
		return



class Manipulator:

	'''
	[pacient] ~ [html in form of string that will be manipulated]
	'''
	def __init__ (self, pacient) :
		
		self.pacient = BeautifulSoup(pacient, 'html.parser')



	'''
	[template] ~ [string that will be inserted in]
	'''
	def import_template ( self, template, selector ) :

		# [template will become an parsed object]
		template = BeautifulSoup(template, 'html.parser')
		
		element = self.pacient.find(selector)
		
		element.clear()
		
		element.append(template)

		
