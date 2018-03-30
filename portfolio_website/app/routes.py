from flask import render_template
from app import app
import os
import yaml

projects = [yaml.load(open('./app/project_data/{}'.format(x))) 
    for x in os.listdir('./app/project_data') if '.yaml' in x]

@app.route('/')
@app.route('/projects')
@app.route('/index')
@app.route('/home')
def index():
    return render_template('index.html', title='Index', projects=projects)

@app.route('/about')
def about():
    return render_template('about.html', title='About')

@app.route('/project01')
def project01():
    project = [x for x in projects if x['link'] == '/project01'][0]
    return render_template('project_base.html', title='Project01', project=project)

@app.route('/project02')
def project02():
    project = [x for x in projects if x['link'] == '/project02'][0]
    return render_template('project_base.html', title='Project02', project=project)

@app.route('/project06')
def project06():
    project = [x for x in projects if x['link'] == '/project06'][0]
    return render_template('hw06.html', title='Project06', project=project)

@app.route('/project07')
def project07():
    project = [x for x in projects if x['link'] == '/project07'][0]
    return render_template('hw07.html', title='Project07', project=project)

@app.route('/project08')
def project08():
    project = [x for x in projects if x['link'] == '/project08'][0]
    return render_template('hw08.html', title='Project08', project=project)

@app.route('/test')
def test():
    project = [x for x in projects if x['link'] == '/test'][0]
    return render_template('test2.html', title='test', project=project)