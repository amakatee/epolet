import nodemailer from 'nodemailer'

export default async (req, res) => {
    const {Name, Email, Message, Phone, Agreement } = req.body
    
    const transporter = nodemailer.createTransport({
        host:'smtp.gmail.com',
        port: 465,
        secure: true,
        auth:{
            user: process.env.user,
            pass: process.env.pass
        }

    })

    try {
        const email = await transporter.sendMail({
            from: Email,
            to:'amabjorg@gmail.com',
            subject:`Новое сообщение от ${Name}`,
            html: `<p>Новая заявка ЭПОЛЕТ</p><br />
            <p><strong>Имя: </strong>${Name}</p><br />
            <p><strong>Телефон: </strong>${Phone}</p><br />
            <p><strong>Сообщение: </strong>${Message}</p><br />
            <p><strong>Email отправителя: </strong>${Email}</p><br />
            <p><strong>Отправитель принял условия пользовательского соглашения </strong>${Agreement}</p><br />
            `
        })
        console.group("Message sent", email.messageId)
    } catch(err){
        console.log(err)
    }

    res.status(200).json(req.body)
}