class CreateCountTimes < ActiveRecord::Migration
  def change
    create_table :count_times do |t|
      t.integer :tick_time

      t.timestamps
    end
  end
end
