
json.set! @user.id do
  json.extract! @user, :id, :user_name, :email, :phone, :img_url  
end
