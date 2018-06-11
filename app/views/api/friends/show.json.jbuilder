json.friend do
  json.extract! @friend, :user_id, :friend_id

  json.extract! @user, :user_name

end
