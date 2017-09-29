class HomeController < ApplicationController
  def index
    
  end

  def reservation
    puts params.inspect
    puts "-------"
    Rsvp.notification_martin(params[:name]).deliver_now
    redirect_to root_path
  end
end
