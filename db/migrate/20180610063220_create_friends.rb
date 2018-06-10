class CreateFriends < ActiveRecord::Migration[5.1]
  def change
    create_table :friends do |t|
      t.integer :user_id, null: false
      t.integer :friend_id, null: false
    end

    add_index :friends, [:user_id, :friend_id], unique: true
  end
end
