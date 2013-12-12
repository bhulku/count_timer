class CountTimersController < ApplicationController
  def index
    @count_times = CountTime.all
  end

  def add_counter
    @count_time = CountTime.new(:tick_time=>params[:tick_time])
    render :json=>{:success=>@count_time.save}
  end
end
