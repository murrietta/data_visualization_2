from flask import render_template
from app import app
import os
import yaml

projPath = './app/project_data/'
projFile = 'projects.yaml'
projects = yaml.load(open(os.path.join(projPath, projFile), 'r'), yaml.FullLoader)


@app.route('/')
@app.route('/projects')
@app.route('/index')
@app.route('/home')
def index():
    return render_template('index.html', title='Index', projects=list(projects.values()))

@app.route('/about')
def about():
    return render_template('about.html', title='About')

@app.route('/project01')
def project01():
    key = 'project01'
    return render_template('project_base.html', title=key, project=projects[key])

@app.route('/project02')
def project02():
    key = 'project02'
    return render_template('project_base.html', title=key, project=projects[key])

@app.route('/project06')
def project06():
    key = 'project06'
    return render_template('project_base.html', title=key, project=projects[key])

@app.route('/project07')
def project07():
    key = 'project07'
    return render_template('project_base.html', title=key, project=projects[key])

@app.route('/project08')
def project08():
    key = 'project08'
    return render_template('project_base.html', title=key, project=projects[key])

@app.route('/project09')
def project09():
    key = 'project09'
    return render_template('project_base.html', title=key, project=projects[key])

@app.route('/project10')
def project10():
    key = 'project10'
    return render_template('project_base.html', title=key, project=projects[key])

@app.route('/test')
def test():
    key = 'test'
    return render_template('project_base.html', title=key, project=projects[key])