import requests
import discord
from discord.ext import commands

discord_url = "discord_url"

def message_column(contents):
    prevCols = ['name','tel','email','request']
    nextCols = ['이름','번호','이메일','요청사항']
    
    for i in range(len(prevCols)):
        contents = contents.replace(prevCols[i], nextCols[i])

    return contents

def message_format(contents):
    contents = message_column(contents)
    return contents.replace('{','').replace('}','').replace('\'','').replace(', ','\n').replace(':', '\n\t\t          => ')

def send_message(datas):
    line = "ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ\n"
    data = {'content':'{}{}'.format(line,message_format(str(datas)))}
    print(datas)
    response = requests.post(discord_url, data=data)
    print(response)
