<script lang="ts">
    import Carrousel from '$lib/components/Carrousel/Carrousel.svelte';
    import Icon from '$lib/components/Icon/Icon.svelte';
    import MainTitle from '$lib/components/MainTitle/MainTitle.svelte';
    import { TITLE_SUFFIX, HOME, getPlatfromIcon } from '$lib/params';
    import MY_SKILLS from '$lib/skills.params';
    import { useTitle } from '$lib/utils/helpers';
    import { isBlank } from '@riadh-adrani/utils';

    const { description, lastName, links, name, title, skills, profilePic } = HOME;

    const isEmail = (email: string): boolean => {
        const reg =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        return !isBlank(email) && reg.test(email);
    };
</script>

<svelte:head>
    <title>{useTitle(title, TITLE_SUFFIX)}</title>
</svelte:head>
<div
    class="col self-center flex-1 md:flex-row md:slef-stretch justify-center lg:justify-between items-center p-y-0px p-x-10px"
>
    <div class="profile-section md:flex-1 gap-10px">
        <img src={profilePic} alt={`${name} ${lastName}`} class="profile-pic" />
        <MainTitle classes="md:text-left ">{name} {lastName},</MainTitle>
        <p class="text-[var(--tertiary-text)]  text-center md:text-left text-[1.2em] font-extralight">
            {description}
        </p>
        <div class="row justify-center md:justify-start p-y-15px p-x-0px gap-2">
            {#each links as link}
                <a
                    class="decoration-none"
                    href={`${isEmail(link.link) ? 'mailto:' : ''}${link.link}`}
                    target="_blank"
                    rel="noreferrer"
                >
                    <Icon icon={getPlatfromIcon(link.platform)} color={'var(--accent-text)'} size={'20px'} />
                </a>
            {/each}
        </div>
    </div>
    <Carrousel items={skills ?? MY_SKILLS} />
</div>

<style>
    .profile-pic {
        width: 200px; /* Increased the width */
        height: 200px; /* Increased the height */
        border-radius: 50%; /* Keeps the image circular */
        /* Feel free to add more styling as needed */
    }
    .profile-section {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }
</style>