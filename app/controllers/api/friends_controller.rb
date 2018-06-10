class Api::FriendsController < ApplicationController

  def index
    @friends = Friend.all
  end

  def create
    @friend = Friend.new(friend_params)

    if @friend.save

    else

    end
  end

  def show
    @friend = Friend.find(params[:id])

  end

  def destroy
    @friend = Friend.find(params[:id])

    @friend.destroy
  end

  private

  def friend_params
    params.require(:friend).permit(:user_id, :friend_id)
  end

end
