class HomeController < ApplicationController
  def index
    
  end

  def reservation
    Rsvp.notification_martin(params[:name]).deliver_now
    Rsvp.notification_dora(params[:name]).deliver_now
    respond_to do |format|
      format.js
    end
  end
end
