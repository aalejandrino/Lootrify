json.friendships do

  @friends.each do |friend|
    json.set! friend.id do

      json.extract! friend, :id, :user_id, :friend_id
    end

  end

end

json.users do

  current_user.friends.each do |user|
    json.set! user.id do
      json.extract! user, :id, :user_name, :email
    end
  end

end
