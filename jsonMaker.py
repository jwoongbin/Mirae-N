import json
from openpyxl import load_workbook
import os

path = os.getcwd()
filelist = os.listdir("./excelfile")
filelist.sort()
print(filelist)
file_path = "./data/data.json"

data = []
for idxl, excelname in enumerate(filelist) :

    excel_path = path+"\\excelfile\\"+excelname
    print(excel_path)
    load_excel = load_workbook(excel_path, data_only=True)

    bookSheet = load_excel['참고서']
    unitSheet = load_excel['대단원']
    subSheet = load_excel['소단원']
    mindmapSheet = []
    try:
        mindmapSheet = load_excel['마인드맵']
    except:
        mindmapSheet = []
    questionsSheet = []
    try:
        questionsSheet = load_excel['추가문제']
    except:
        questionSheet = []
        
    bookHeader = 1
    unitHeader = 1
    subHeader = 2
    mindmapHeader = 1
    questionsHeader = 1
    bookData = {}

    for idxb, book in enumerate(bookSheet.rows):
        if idxb < bookHeader : continue
        if not book[1].value : continue
        contents = []
        for idxu, unit in enumerate(unitSheet.rows):
            if idxu < unitHeader : continue
            # if part[1].value != unit[2].value : continue
            # grammarValue = "문법"+ str(unit[2].value)
            subs = []
            subIndex = "notindex"
            btns = []
            questions = []
            mindmap = {}
            for idxs, sub in enumerate(subSheet.rows):
                if idxs < subHeader : continue
                if unit[1].value != sub[1].value : 
                    if btns == []:
                        continue
                    else : 
                        if not mindmapSheet == []:
                            for idxm, mind in enumerate(mindmapSheet.rows):
                                if idxm < mindmapHeader : continue
                                if unit[1].value != mind[1].value : continue
                                if subIndex != mind[2].value : continue
                                mindmap = {
                                    "title" : mind[3].value,
                                    "type" : mind[4].value,
                                    "mind_one" : mind[5].value,
                                    "contents_one" : mind[6].value,
                                    "image_one" : mind[7].value, 
                                    "mind_two" : mind[8].value,
                                    "contents_two" : mind[9].value,
                                    "image_two" : mind[10].value, 
                                    "mind_three" : mind[11].value,
                                    "contents_three" : mind[12].value,
                                    "image_three" : mind[13].value                            
                                }
                        if not questionsSheet == []:
                            for idxq, question in enumerate(questionsSheet.rows):
                                if idxq < questionsHeader : continue
                                if unit[1].value != question[1].value : continue
                                if subIndex != question[2].value : continue
                                questions.append({
                                    "num" : question[3].value,
                                    "question" : question[4].value,
                                    "answer" : question[5].value,
                                    "option_one" : question[6].value,
                                    "option_two" : question[7].value,
                                    "option_three" : question[8].value
                                })
                        subs.append({
                            "sub" : subIndex,
                            "btns" : btns,
                            "mindmap" : mindmap,
                            "questions" : questions
                        })
                        btns = []
                        questions = []
                        mindmap = {}
                        subIndex = sub[2].value
                        continue
                if subIndex == sub[2].value or subIndex == "notindex" :
                    subIndex = sub[2].value
                    print(subIndex)
                    btns.append({
                        "btn_name" : sub[3].value,
                        "btn_url" : sub[4].value
                    })
                else:
                    if not mindmapSheet == []:
                        for idxm, mind in enumerate(mindmapSheet.rows):
                            if idxm < mindmapHeader : continue
                            if unit[1].value != mind[1].value : continue
                            if subIndex != mind[2].value : continue
                            mindmap = {
                                "title" : mind[3].value,
                                "type" : mind[4].value,
                                "mind_one" : mind[5].value,
                                "contents_one" : mind[6].value,
                                "image_one" : mind[7].value, 
                                "mind_two" : mind[8].value,
                                "contents_two" : mind[9].value,
                                "image_two" : mind[10].value, 
                                "mind_three" : mind[11].value,
                                "contents_three" : mind[12].value,
                                "image_three" : mind[13].value                            
                            }
                    if not questionsSheet == []:
                        for idxq, question in enumerate(questionsSheet.rows):
                            if idxq < questionsHeader : continue
                            if unit[1].value != question[1].value : continue
                            if subIndex != question[2].value : continue
                            questions.append({
                                "num" : question[3].value,
                                "question" : question[4].value,
                                "answer" : question[5].value,
                                "option_one" : question[6].value,
                                "option_two" : question[7].value,
                                "option_three" : question[8].value
                            })
                    subs.append({
                        "sub" : subIndex,
                        "btns" : btns,
                        "mindmap" : mindmap,
                        "questions" : questions
                    })
                    btns = []
                    questions = []
                    mindmap = {}
                    subIndex = sub[2].value
                    btns.append({
                        "btn_name" : sub[3].value,
                        "btn_url" : sub[4].value
                    })
            if btns != []:
                if not mindmapSheet == []:
                    for idxm, mind in enumerate(mindmapSheet.rows):
                        if idxm < mindmapHeader : continue
                        if unit[1].value != mind[1].value : continue
                        if subIndex != mind[2].value : continue
                        mindmap = {
                            "title" : mind[3].value,
                            "type" : mind[4].value,
                            "mind_one" : mind[5].value,
                            "contents_one" : mind[6].value,
                            "image_one" : mind[7].value, 
                            "mind_two" : mind[8].value,
                            "contents_two" : mind[9].value,
                            "image_two" : mind[10].value, 
                            "mind_three" : mind[11].value,
                            "contents_three" : mind[12].value,
                            "image_three" : mind[13].value                            
                        }
                if not questionsSheet == []:
                    for idxq, question in enumerate(questionsSheet.rows):
                        if idxq < questionsHeader : continue
                        if unit[1].value != question[1].value : continue
                        if subIndex != question[2].value : continue
                        questions.append({
                            "num" : question[3].value,
                            "question" : question[4].value,
                            "answer" : question[5].value,
                            "option_one" : question[6].value,
                            "option_two" : question[7].value,
                            "option_three" : question[8].value
                        })
                subs.append({
                    "sub" : subIndex,
                    "btns" : btns,
                    "mindmap" : mindmap,
                    "questions" : questions
                })
            contents.append({
                "unit" : unit[1].value,
                "title" : unit[2].value,
                "subs" : subs
            })
        data.append({
            "subject" : book[1].value,
            "grade" : book[2].value,
            "semester" : book[3].value,
            "cover_img" : book[4].value,
            "book_url" : book[5].value,
            "contents" : contents
        })




with open(file_path, 'w', encoding="UTF-8") as outfile:
    outfile.write(json.dumps(data,ensure_ascii=False,indent=2))
