class ImagesController < ApplicationController

  def destroy

    @admin  = Post.find_by(id: params[:admin_id])

    @post = Post.find_by(id: params[:post_id])
    if @admin
      redirect_to root_path and return unless current_admin == @admin
      @admin.avatar.destroy
      redirect_to edit_admin_registration_path(@admin)
    elsif @post
      redirect_to root_path and return unless @post.admin == current_admin
    @post.images.find(params[:id]).destroy
      redirect_to edit_post_path(@post)
    end
  end

end
