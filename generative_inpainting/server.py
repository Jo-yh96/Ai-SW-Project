import os, sys
from flask import Flask, escape, request,jsonify,Response, g, make_response
from flask.templating import render_template
from pymongo import MongoClient
import json 


# conn = MongoClient('')
# db = conn.gps_saver

# import app as g_cut




 
app = Flask(__name__)
app.debug = True
 
# Main page
# @app.route('/')
# def index():
#     return render_template('./index.html')
 
# @app.route('/')
# def nst_get():
#     return render_template('nst_post.html')
 
@app.route('/model_post', methods=['GET','POST'])

# def getcookie():
#     if request.method == 'POST':
        # user = request.cookies.get()
        
def nst_post():
    if request.method == 'POST':
        # print("ok")

        # Reference Image
        # refer_img = request.form['refer_img']
        # refer_img_path = 'static/images/'+str(refer_img)
 
        # # User Image (target image)
        
        # user_files = request.files.getlist["files[]"]
        user_img = request.files['user_img']
       
        mask_img = request.files['mask_img']
        user_img.save('./static/images/user_img/'+str(user_img.filename))
        mask_img.save('./static/images/mask_img/'+str(mask_img.filename))
        # g_cut.grabcut()
        user_img_path = './static/images/user_img/'+str(user_img.filename)
        mask_img_path  = './static/images/mask_img/'+str(mask_img.filename)
        output_path = './static/images/output_img/''output_'+str(user_img.filename)
        # mask_img_path = './examples/places2/sample_mask.png'
        os.system(f"python test.py --image { user_img_path} --mask {mask_img_path} --output {output_path} --checkpoint ./model_logs/drive-download-20220809T024702Z-001")
        # result_img_path = 'output_path'
        return jsonify({'result' : output_path})
        
    # return render_template('nst_post.html',user_img = user_img_path, mask_img = mask_img_path)

               
   
               

if __name__ == '__main__':
    
    app.run(host='127.0.0.1')
    