import requests

discord_url = "https://discordapp.com/api/webhooks/1072332274235871372/ycD2z1PAucoTiiBMplUfpUj89mr55U_OQ_7-xHIqFj74rInEGfNvgqsCJ97UJz49vpD7"

def message_column(contents):
    prevCols = ['name','tel','email','request']
    nextCols = ['🏷️\n이름\t\t\t','번호\t\t\t','이메일\t\t','\n요청사항\t\n']
    
    for i in range(len(prevCols)):
        contents = contents.replace(prevCols[i], nextCols[i])

    return contents

def message_format(contents):
    contents = message_column(contents)
    return contents.replace('{','').replace('}','').replace('\'','').replace(', ','\n').replace(':', '▶️ ')

def send_message(datas):
    line = "\nㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ\n"
    data = {'content':'{}{}'.format(line,message_format(str(datas)))}
    print(datas)
    response = requests.post(discord_url, data=data)
    print(response)
