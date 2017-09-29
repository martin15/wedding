class Rsvp < ApplicationMailer
  default :from => "no.reply@just-martin.com"

  def notification_dora(name)
    @name = name
    mail(:to => "jlmtheodora@gmail.com", :subject => "will come our wedding")
  end

  def notification_martin(name)
    @name = name
    mail(:to => "just.martin15@gmail.com", :subject => "will come our wedding")
  end
end
