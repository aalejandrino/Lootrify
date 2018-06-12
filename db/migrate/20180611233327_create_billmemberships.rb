class CreateBillmemberships < ActiveRecord::Migration[5.1]
  def change
    create_table :billmemberships do |t|
      t.integer :member_id, null: false
      t.integer :bill_id, null: false

    end
  end
end
