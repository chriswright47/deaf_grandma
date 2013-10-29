get '/' do
  @grandma = params[:grandma]
  # Look in app/views/index.erb
  erb :index
end

post '/' do
  #"Implement the /grandma route yourself.<br>Params: <code>#{params.inspect}</code>"
  # return "#{params[:user_input]}"r
  if params[:user_input].to_s == params[:user_input].to_s.upcase
    "Nathan came at me like a wrecking ball"
  else 
    "Speak up!"
  end
end
