class CreateBills < ActiveRecord::Migration[5.1]
  def change
    create_table :bills do |t|
      t.string :title, null: false
      t.integer :creator_id, null: false
      t.integer :total_bill, null: false
      t.string :date, null: false
      t.integer :split_price
      t.integer :num_members
    end

    add_index :bills, :creator_id
  end
end
