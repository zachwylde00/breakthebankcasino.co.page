			<script type="text/javascript">
				window.onload = function(){
					document.getElementsByClassName('selector')[0].onchange = function(){
						var $this_value = this.value;
						window.location = $this_value;
					}
				}
			</script>
			<div class="left static-menu">
				<div class="link-container">
					<div class="desktop">
						<a href="{site_url}dashboard"{if strpos(getenv('REQUEST_URI'), 'dashboard') !== false} class="active"{/if}>حساب کاربری</a>
						<a href="{site_url}bets/myrecords"{if strpos(getenv('REQUEST_URI'), 'bets/myrecords') !== false OR strpos(getenv('REQUEST_URI'), 'bets/BetDetail') !== false} class="active"{/if}>پیش بینی های من</a>
						<a href="{site_url}payment/transactions"{if strpos(getenv('REQUEST_URI'), 'payment/transactions') !== false} class="active"{/if}>سابقه تراکنش ها</a>
						<a href="{site_url}payment/credit"{if strpos(getenv('REQUEST_URI'), 'payment/credit') !== false} class="active"{/if}>شارژ حساب</a>
						<a href="{site_url}users/withdraw"{if strpos(getenv('REQUEST_URI'), 'users/withdraw') !== false} class="active"{/if}>درخواست جایزه</a>
						<a href="{site_url}users/representation"{if strpos(getenv('REQUEST_URI'), 'users/representation') !== false} class="active"{/if}>طرح نمایندگی</a>
						<a href="{site_url}users/profile"{if strpos(getenv('REQUEST_URI'), 'users/profile') !== false} class="active"{/if}>پروفایل من</a>
						<a href="{site_url}contacts/tickets/ticket-list"{if strpos(getenv('REQUEST_URI'), 'contacts/tickets/ticket-list') !== false OR strpos(getenv('REQUEST_URI'), '/contacts/tickets/view-ticket') !== false OR strpos(getenv('REQUEST_URI'), '/contacts/tickets/new-ticket') !== false} class="active"{/if}>پشتیبانی</a>
						<a href="{site_url}users/logout">خروج از حساب کاربری</a>
					</div>
					
					<div class="mobile">
						<select class="selector">
							<option value="{site_url}dashboard"{if strpos(getenv('REQUEST_URI'), 'dashboard') !== false} selected="selected"{/if}>حساب کاربری</option>
							<option value="{site_url}bets/myrecords"{if strpos(getenv('REQUEST_URI'), 'bets/myrecords') !== false OR strpos(getenv('REQUEST_URI'), 'bets/BetDetail') !== false} selected="selected"{/if}>پیش بینی های من</option>
							<option value="{site_url}payment/transactions"{if strpos(getenv('REQUEST_URI'), 'payment/transactions') !== false} selected="selected"{/if}>سابقه تراکنش ها</option>
							<option value="{site_url}payment/credit"{if strpos(getenv('REQUEST_URI'), 'payment/credit') !== false} selected="selected"{/if}>شارژ حساب</option>
							<option value="{site_url}users/withdraw"{if strpos(getenv('REQUEST_URI'), 'users/withdraw') !== false} selected="selected"{/if}>درخواست جایزه</option>
							<option value="{site_url}users/representation"{if strpos(getenv('REQUEST_URI'), 'users/representation') !== false} selected="selected"{/if}>طرح نمایندگی</option>
							<option value="{site_url}users/profile"{if strpos(getenv('REQUEST_URI'), 'users/profile') !== false} selected="selected"{/if}>پروفایل من</option>
							<option value="{site_url}contacts/tickets/ticket-list"{if strpos(getenv('REQUEST_URI'), '/contacts/tickets/ticket-list') !== false OR strpos(getenv('REQUEST_URI'), '/contacts/tickets/view-ticket') !== false OR strpos(getenv('REQUEST_URI'), '/contacts/tickets/new-ticket') !== false} selected="selected"{/if}>پشتیبانی</option>
							<option value="{site_url}users/logout">خروج از حساب کاربری</option>
						</select>
					</div>
				</div>
			</div>