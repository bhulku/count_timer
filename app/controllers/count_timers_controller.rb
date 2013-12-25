class CountTimersController < ApplicationController
  def index
    @count_times = CountTime.all
  end

  def add_counter
    @count_time = CountTime.new(:tick_time=>params[:tick_time])
    render :json=>{:success=>@count_time.save,:tick_time=>@count_time.tick_time}
  end
  def add_name
    @name = params[:name]
    respond_to do |format|
      format.html
      format.js
    end
  end
end
